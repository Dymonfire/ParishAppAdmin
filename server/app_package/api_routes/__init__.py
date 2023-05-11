from flask import Blueprint
from flask_restx import Api


routes = Blueprint("routes", __name__, url_prefix="/api")

from .notifications import api as api_notifications_

api = Api(
    routes,
    doc="/docs",
    version="1.0",
    title="Parish App API",
    description="All Apis",
)
api.add_namespace(api_notifications_)