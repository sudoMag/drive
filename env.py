# env variables ___________________________________________________-

import os

_dirname = os.getcwd()
DATABASE_RUTE = "sqlite:///%s/database/database.db" % _dirname
SCRIPTS_RUTE = "%s/static/js/" % _dirname
STYLES_RUTE = "%s/static/css/" % _dirname
MEDIA_RUTE = "%s/static/media/" % _dirname
USERS_FOLDER_RUTE = "%s/folders/" % _dirname
HOST_IP = "127.0.0.1"