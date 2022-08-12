<template>
    <v-card>
        <v-app-bar height="120" prominent class="pa-0 ma-0 bg-blue darken-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                    <v-app-bar-title :style="style" class=" text-h4 text-white d-flex justify-center">Portfolio</v-app-bar-title>
                    </v-col>
                    <v-tabs hide-slider grow centered background-color="blue accent-1">
                        <v-tab class="text-white text-h5" v-for="link in links" :key="link.to" :to="link.to">
                            <!--<v-icon large color="indigo">
                                mdi-alert-circle
                            </v-icon>-->
                            {{ link.title }}
                        </v-tab>
                    </v-tabs>
                </v-row>
            </v-container>
        </v-app-bar>
    </v-card>

</template>

<script>
export default {
    data: () => ({
        style: {
            fontSize: '29px',
            fontWeight: '700',
            textShadow: '4px 2px 3px grey'
        },
        tab: null,
        links: [
            { title: "Info", to: "/VueInfo" },
            { title: "Used", to: "/VueUsed" },
            { title: "Contact", to: "/VueContact" },
        ],
    }),
}
</script>

<style>
</style>


        