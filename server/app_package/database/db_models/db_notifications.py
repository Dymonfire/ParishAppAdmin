from .db_model import DBModel


SQL_CREATION = """
    CREATE TABLE IF NOT EXISTS parishapp.notifications (
        id serial PRIMARY KEY,
        author_id VARCHAR ( 100 ) NOT NULL,
        title VARCHAR ( 150 ) ,
        text VARCHAR ( 3000 ),
        status VARCHAR ( 50 ) NOT NULL,
        date_created TIMESTAMP 
    );
"""

SQL_INSERTION = """
    INSERT INTO parishapp.notifications
        (id,author_id,title,text,recipient,status,date_created)
        VALUES (%s,%s,%s,%s,%s,%s,%s)
        RETURNING id
"""

SQL_DELETE = """
    DELETE FROM parishapp.notifications WHERE id = %s;
"""

# SQL_UPDATE = """
#     UPDATE parishapp.notifications
#     SET 
#     WHERE id = %s
# """

class NotificationsModel(DBModel):

    def __init__(self):
        super().__init__()

    def create_table(self):
        self.db_ops.executeCommit(SQL_CREATION)

    def get_all_rows(self):
        pass

    def insert_row(self, notification_details:dict):
        values = (
            # notification_details["id"],
            notification_details["author_id"],
            notification_details["title"],
            notification_details["text"],
            notification_details["status"],
            notification_details["date_created"],
        )
        if self.check_notification_details(notification_details):
            return self.db_ops.executeCommit(SQL_INSERTION, values)
        return False
    
    def del_row(self, id:str):
        return self.db_ops.executeCommit(SQL_DELETE, id)
    
    def update_row(self):
        return super().update_row()

    def check_notification_details(self, info:dict):
        return "author_id" in info \
            and "title" in info \
            and "text" in info \
            and "status" in info \
            and "date_created" in info