<template>
    <div>
        <div class="text-center d-flex pt-4 mb-8 ">
            <v-btn class="ma-2 bg-indigo" @click="all">
                Open(展開)
            </v-btn>
            <v-btn class="ma-2 bg-indigo" @click="none">
                Close(閉じる)
            </v-btn>
        </div>

        <v-expansion-panels variant="inset" v-model="panel" multiple>
            <v-expansion-panel v-on="{ mouseover: doFoo }" value="foo" class="ma-10">
                <v-expansion-panel-title class="dotabs" expand-icon="mdi-menu-down" color="indigo">
                    Vue3
                </v-expansion-panel-title>
                <v-expansion-panel-text>VueCLIを使用せずViteを使用。SPAページを制作したくVueを使用。ライフルサック、Composition APIを学習致しましたが実装できず</v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel v-on="{ mouseover: doBar }" value="bar" class="ma-10">
                <v-expansion-panel-title class="dotabs" expand-icon="mdi-menu-down" color="indigo">
                    Vuetify3
                </v-expansion-panel-title>
                <v-expansion-panel-text>Vuetifyを使用。transitionなどのアニメーションを実装できず</v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel v-on="{ mouseover: doBaz }" value="baz" class="ma-10">
                <v-expansion-panel-title class="dotabs" expand-icon="mdi-menu-down" color="indigo">
                    VueRouer
                </v-expansion-panel-title>
                <v-expansion-panel-text></v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<style>
.dotabs {
    font-weight:700;
    font-size:12em;
}
</style>

<script>
export default {
    data() {
        return {
            panel: [],
        }
    },
    methods: {
        all() {
            this.panel = ['foo', 'bar', 'baz']
        },
        none() {
            this.panel = []
        },
        doFoo() {
            this.panel = ['foo']
        },
        doBar() {
            this.panel = ['bar']
        },
        doBaz() {
            this.panel = ['baz']
        }
    },
}
</script>