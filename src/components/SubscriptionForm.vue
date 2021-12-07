<template>
    <form class="form-container">
        <div class="info-container">
            <h1 class="heading">Subscribe to newsletter</h1>

            <div class="subheading">
                Subscribe to our newsletter and get 10% discount 
                on pineapple glasses.
            </div>
        </div>
    
        <div class="input-container">
            <div class="left-side">
                <div class="side-line"></div>
                <input 
                    for="email" 
                    type="email"
                    placeholder="Type your email address here…" 
                    required 
                    v-model="email"
                />
            </div>

            <button />
        </div>

        <div class="tos-container">
            <button class="check-button">
                <img src="@img/checkmark.svg" />
            </button>

            <span class="text">
                I agree

                <a href="#" class="bold-underline-text">
                    terms of service
                </a>
            </span>
        </div>

        <div>{{email}}</div>
        <div>{{isEmailValid}}</div>
    </form>
</template>

<script setup>
    import { computed, ref, shallowRef, watch } from 'vue'

    let email = ref('')
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

    function isEmailValid() {
      return 'test'
    }


</script>