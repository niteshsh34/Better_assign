from flask import Blueprint, request, jsonify
from db import get_db

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO users (username, password) VALUES (%s, %s)",
        (data['username'], data['password'])
    )
    db.commit()

    return jsonify({"message": "User registered"})
    

@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM users WHERE username=%s AND password=%s",
        (data['username'], data['password'])
    )

    user = cursor.fetchone()

    if user:
        return jsonify({"user": user})
    return jsonify({"message": "Invalid credentials"}), 401