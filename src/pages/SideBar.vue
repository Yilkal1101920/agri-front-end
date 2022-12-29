<template>
    <div>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <aside class="absolute overflow-y-auto rounded bg-blue-500 py-0 px-0" aria-label="Sidebar">
            <div class="">
                <div class="nav">
                    <ul>
                      <li><router-link to="/login">Log In</router-link></li>
                      <li><router-link to="/register">create new Account</router-link></li>
                    </ul>
                </div>
            </div>
        </aside>
    </div>
    </template>
    
    <script setup>
    </script>
    
