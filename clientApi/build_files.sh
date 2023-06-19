echo "BUILD START"
python3.9 -m pip install -r requirements.txt
python3.9 setup.py build_ext --pg-config /path/to/pg_config build
python3.9 manage.py collectstactic --noinput --clear
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
echo "BUILD END"