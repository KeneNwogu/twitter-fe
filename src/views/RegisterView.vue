<template>
    <div class="body">
        <div class="box">
            <div class="title">Register</div>
            <p><b>Please fill in this form to create an account</b></p>
            <div class="content">
                <form action="/registration" method="post">
                    <div class="user-details">
                        <div class="input-box">
                            <b class="details">First Name</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">
                            <b class="details">Last Name</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">    
                            <b class="details">Username</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">  
                            <b class="details">Email</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">
                            <b class="details">Password</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">
                            <b class="details">Confirm Password</b>
                            <input type="text" required>
                        </div>
                        <div class="input-box">    
                            <b class="details">Phone Number</b>
                            <input type="number" required>
                        </div>
                        <div class="input-box">
                            <b class="details">Date of Birth</b>
                            <input type="date" required>
                        </div>
                        <div class="submit-btn">
                            <input type="submit" value="REGISTER">
                        </div>
                    </div>
                    <p>If you already have an account <a href="/sign up/index.html">sign in</a> here</p>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgb(28, 124, 235);
    position: absolute;
    top: 0;
    left: 0;
}
.box{
    /* max-width: 700px; */
    width: 90vw;
    margin: auto;
    background-color: white;
    padding: 1rem 3rem;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.box .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}

.content form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}
form .input-box b.details{
    display: block;
    margin-bottom: 5px;
}
.user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
}
a{
    color: blue;
    font-style: italic;
    text-decoration: none;
}

form .btn input, .submit-btn{
    width: fit-content;
    padding: 0.5rem;
    border-radius: 3px;
    border: none;
    color: rgb(19, 5, 5);
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    background: rgb(28, 124, 235);
}

.submit-btn input{
    background: inherit;
}

@media(max-width: 584px){
    .body{
        height: fit-content;
    }
    .box{
        max-width: 100%;
        height: fit-content;
    }
    form .user-details .input-box{
        margin-bottom: 15px;
        width: 100%;
    }
    .content form .user-details{
        max-height: 300px;
        overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar{
        width: 5px;
    }
}

@media(max-width: 459px){
    .box .content .category{
        flex-direction: column;
    }
}
</style>