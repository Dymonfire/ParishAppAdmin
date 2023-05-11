from flask import jsonify, request
from flask_restx import Namespace, Resource

from ..database.db_models import NotificationsModel

api = Namespace("General", description="Notification APIs", path="/")

# /api/notifications
@api.route("/notifications")
class Notifications(Resource):
    def post(self):
        print("TEST")
        req_body = request.get_json()
        print(req_body)
        notification_details = req_body.get("notification_details")
        notification = NotificationsModel()
        id: str = notification.insert_row(notification_details)
        if id:
            return jsonify({"success": True, "notification_id": id})
        return jsonify(success=False, msg="Failed to create notification")
        return "TEST"

    def get(self):
        # return jsonify(success=True)
        print("aaaaaaa")
        return "TESTaa"

    def delete(self):
        # return jsonify(success=True)
        return "TEST"

