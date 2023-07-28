<template>
    <div>
        <h1>Contact Us</h1>
        <p>Have questions or need further information? Feel free to reach out to our team or fill out the contact form below.</p>

        <div class="employees">
            <h2>Our Team</h2>
            <div class="employee" v-for="(employee, index) in employees" :key="index">
                <h3>{{employee.name}}</h3>
                <p>{{employee.position}}</p>
                <p>Email: {{employee.email}}</p>
                <p>Phone: {{employee.phone}}</p>
            </div>
        </div>

        <div class="contact-form">
            <h2>Contact Form</h2>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email">
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" v-model="form.message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            employees: [
                {name: 'Employee 1', position: 'Position 1', email: 'employee1@example.com', phone: '123-456-7890'},
                {name: 'Employee 2', position: 'Position 2', email: 'employee2@example.com', phone: '123-456-7891'},
                // Add more employees as needed
            ],
            form: {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    methods: {
        submitForm() {
            // Implement your form submission logic here.
            console.log(this.form);
        }
    }
};
</script>

<style scoped>
/* Insert CSS styles here */
</style>
