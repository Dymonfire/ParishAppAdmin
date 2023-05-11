import traceback

from app_package.database.db_models import MODEL_LIST
# from app_package.database.db_operations import DBOperations

# This is required to be here as this file runs once, before workers are created
def on_starting(server):
    try:
        # db_ops = DBOperations()
        # db_ops.executeCommit("CREATE SCHEMA IF NOT EXISTS ;")
        # for model in MODEL_LIST:
        #     print(model)
        #     model().create_table()
        pass
    except Exception as e:
        traceback.print_exc()

    print("Created default tables")