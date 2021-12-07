<template>
    <div class="flex">
        <div class="w-full bg-pineapple sm:w-42.5 sm:bg-gradient-to-b from-white to-glass">
            <navigation-bar />

           <!-- <div class="content">
                <subscription-form />
                

                <div class="separating-line"></div>

                <div class="social-items-container">
                    <div class="facebook-container">
                        <img src="@img/facebook-logo.svg" />
                    </div>
                    <div class="instagram-container">
                        <img src="@img/instagram-logo.svg" />
                    </div>
                    <div class="twitter-container">
                        <img src="@img/twitter-logo.svg" />
                    </div>
                    <div class="youtube-container">
                        <img src="@img/youtube-logo.svg" />
                    </div>
                </div>
            </div>-->
        </div>
        <img class="hidden sm:block sm:object-cover sm:h-screen" src="@img/background-image.png" />
    </div>
</template>

<script setup>
   import NavigationBar from '@/components/NavigationBar.vue'
   import SubscriptionForm from '@/components/SubscriptionForm.vue'
   import SubmittedForm from '@/components/SubmittedForm.vue'
</script>