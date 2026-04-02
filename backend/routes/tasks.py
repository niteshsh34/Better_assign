from flask import Blueprint, request, jsonify
from db import get_db

tasks = Blueprint('tasks', __name__)

@tasks.route('/tasks/<int:user_id>', methods=['GET'])
def get_tasks(user_id):
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT * FROM tasks WHERE user_id=%s", (user_id,))
    return jsonify(cursor.fetchall())


@tasks.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO tasks (user_id, title) VALUES (%s, %s)",
        (data['user_id'], data['title'])
    )
    db.commit()

    return jsonify({"message": "Task added"})


@tasks.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "UPDATE tasks SET completed = NOT completed WHERE id=%s",
        (id,)
    )
    db.commit()

    return jsonify({"message": "Updated"})


@tasks.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    db = get_db()
    cursor = db.cursor()

    cursor.execute("DELETE FROM tasks WHERE id=%s", (id,))
    db.commit()

    return jsonify({"message": "Deleted"})