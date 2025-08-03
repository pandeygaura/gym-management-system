from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# MySQL Database connection
db = mysql.connector.connect(
    host="localhost3306",
    user="root",
    password="",         # Put your MySQL password here
    database="gym_db"    # You must create this DB in MySQL
)
cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
        user = cursor.fetchone()
        if user:
            return "Login successful!"
        else:
            return "Invalid credentials!"
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
        db.commit()
        return redirect('/login')
    return render_template('register.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
