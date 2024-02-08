<template>{{ lesson }}</template>

<script setup>
import { useRoute } from 'vue-router'

const  lesson = useRoute().params.lesson
</script>