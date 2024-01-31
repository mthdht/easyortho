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

    <section class="functionalities container py-20">
        <h2 class="text-3xl font-bold text-center">titre de la section</h2>
        <div class="grid grid-cols-4 gap-4 mt-12">
            <div class="functionality flex flex-col items-center p-4">
                <div class="icon size-8 bg-red-600 mb-4"></div>
                <h3 class="font-semibold">titre fonctionalité</h3>
                <p class="text-slate-500">description de la fonctionalité</p>
            </div>
            <div class="functionality flex flex-col items-center p-4">
                <div class="icon size-8 bg-red-600 mb-4"></div>
                <h3 class="font-semibold">titre fonctionalité</h3>
                <p class="text-slate-500">description de la fonctionalité</p>
            </div>
            <div class="functionality flex flex-col items-center p-4">
                <div class="icon size-8 bg-red-600 mb-4"></div>
                <h3 class="font-semibold">titre fonctionalité</h3>
                <p class="text-slate-500">description de la fonctionalité</p>
            </div>
            <div class="functionality flex flex-col items-center p-4">
                <div class="icon size-8 bg-red-600 mb-4"></div>
                <h3 class="font-semibold">titre fonctionalité</h3>
                <p class="text-slate-500">description de la fonctionalité</p>
            </div>
        </div>
    </section>

    <section class="lesson-categories py-20 bg-slate-100">
        <div class="container">

            <h2 class="text-3xl font-bold text-center">titre de la section</h2>
            <div class="grid grid-cols-6 gap-4 px-20 mt-12 transition-all">
                <router-link to="/">    
                    <div class="category group bg-white p-4 aspect-square flex flex-col items-center justify-center hover:bg-cyan-700 rounded shadow hover:shadow-lg hover:scale-[1.03] transition-transform">
                        <div class="icon size-20 bg-red-600 mb-4"></div>
                        <h3 class="font-semibold group-hover:text-white text-xl">fonctionalité</h3>
                        <p class="px-2 py-1 rounded bg-cyan-50 text-cyan-700 text-xs font-bold mt-1">15 cours</p>
                    </div>
                </router-link>
                
                
            </div>
        </div>
    </section>
</template>