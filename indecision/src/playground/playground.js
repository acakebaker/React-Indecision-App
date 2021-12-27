import React, { useState } from 'react';

function App() {
    class Person {
        constructor(name = 'Anonymous', age = 0) {
            this.name = name;
            this.age = age;
        }

        getDescription() {
            return `Hey I'm ${this.name}, and I am ${this.age} years old!`;
        }
    }

    class Student extends Person {
        constructor(name, age, major) {
            super(name, age);
            this.major = major;
        }

        hasMajor() {
            return !!this.major;
        }

        getDescription() {
            let description = super.getDescription();
            return `${description} I also study ${this.major}.`;
        }
    }

    const Alex = new Student('Alex Baker', 26, 'Computer Science');
    console.log(Alex.getDescription());

    const other = new Student();
    console.log(other.getDescription());

  return (
    <div>
      
    </div>
  );
}

export default App;
