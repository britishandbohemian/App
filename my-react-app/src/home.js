// src/components/Home.js
import React from 'react';

function Home() {
    return (


        <section class="signin">


            <div id="imgtop" class="gradient">
                <h1 class="logo" style="color: white;">Feed</h1>
            </div>


            <form class="signinfrm" action="/home" method="POST">


            <div id="inputs">
                
                <label for="">Name</label>
                                                    <input id="username" name="username" type="text"></input>
                                            
                                                    <label for="">Password</label>
                                                    <input type="text"> </input>
                                            
                                                            <div style="margin: auto;">
                                                    
                                                            <button type="submit" class="btns">
                                                                    <span style="color:white" class="material-symbols-outlined">
                                                                        arrow_forward_ios
                                                                        </span>
                                                                    </button>
                                                        
                                                            </div>
                                                    </div>

            </form>






        </section>
    );
}

export default Home;
