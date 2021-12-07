<template>
    <div class="flex h-full">
        <div class="w-full bg-pineapple bg-cover bg-center h-screen sm:w-42.5 sm:bg-gradient-to-b from-white to-glass">
            <navigation-bar />

            <div class="my-44 mx-5 sm:mt-14.625 sm:ml-6.25 sm:bg-gradient-to-b sm:from-transparent sm:to-transparent bg-gradient-to-b from-white to-glass">
                <subscription-form />
                
                <div class="sm:max-w-25 max-w-18.5 h-1px ml-5 mt-5 sm:ml-10 sm:mt-3.125 bg-cream"></div>

                <div class="flex">
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
            </div>
        </div>
        <img class="hidden sm:block sm:object-cover sm:h-screen" src="@img/background-image.png" />
    </div>
</template>

<script setup>
   import NavigationBar from '@/components/NavigationBar.vue'
   import SubscriptionForm from '@/components/SubscriptionForm.vue'
   import SubmittedForm from '@/components/SubmittedForm.vue'
</script>