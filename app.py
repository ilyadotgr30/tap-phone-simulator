from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/menu/service-menu')
def service_menu():
    return render_template('service-menu.html')


if __name__ == '__main__':
    app.run(debug=True)
