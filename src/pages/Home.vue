<template>
    <section class="jumbotron bg-gradient-to-r from-slate-100 to-slate-300">
        <div class="container py-20">
            <h1 class="text-4xl font-bold">titre de la page</h1>
            <p class="lead mb-4 font-semibold text-slate-500">Une description du site </p>
            <router-link to="/">
                <button class="rounded-full px-4 py-2 bg-sky-600 text-white font-semibold">S'inscrire</button>
            </router-link>
        </div>
    </section>

    <section class="functionalities container py-20 bg-red-200">
        <h2 class="text-3xl font-bold">titre de la section</h2>
        <div class="grid grid-cols-4 gap-4">
            <div class="functionality flex flex-col items-center">
                <div class="icon size-7 bg-red-600"></div>
                <h3>titre fonctionalité</h3>
                <p>description de la fonctionalité</p>
            </div>
        </div>
    </section>
</template>