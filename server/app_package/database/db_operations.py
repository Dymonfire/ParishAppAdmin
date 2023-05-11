import traceback
from flask import abort

from .db_connection import DBConnection
from typing import Optional, Tuple

class DBOperations(DBConnection):
    def __init__(self):
        super().__init__()

    # def executeFetch(self, query: str):
    #     conn, cur = self.get_db_conn(driver)
    #     cur.execute(query)
    #     data = cur.fetchall()
    #     cur.close()
    #     conn.close()
    #     return data

    def executeCommit(self, query: str, params: Optional[Tuple] = None):
        conn, cur = self.get_db_conn()
        error = None
        try:
            cur.execute(query, params)
            conn.commit()
        except Exception as e:
            error = f'DB operation failed with exeception- {e}'
            print(error)
            traceback.print_exc()
        finally:
            cur.close()
            conn.close()
            if error is not None:
                abort(500, description=error)
                return False
        return True
        


    