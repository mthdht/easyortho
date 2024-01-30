<template>
    <header
      class="
        navbar
        bg-gradient-to-r
        from-cyan-700
        to-teal-800
        text-white
        sticky
        top-0
        shadow
      "
    >
      <div class="navbar-container flex gap-4 font-semibold px-2 py-4">
        <div class="navbar-brand bg-red-500 w-32"></div>
        <nav class="navbar-links flex justify-center gap-4 grow">
          <router-link to="/">Go to Home</router-link>
        </nav>
        <div class="navbar-actions w-24 bg-green-500"></div>
      </div>
    </header>
  </template>
  
  <script setup></script>
  