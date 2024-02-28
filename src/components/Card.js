import React from 'react';

function Card() {
    return (
        <div class="mx-auto max-w-md overflow-hidden rounded bg-white shadow-lg">
            <img class="h-48 w-full" src="https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div class="px-6 py-4">
                <div class="text-black mb-2 text-xl font-bold">
                    Welcome to 11.AI Class!
                    <p class="pt-4 text-base text-gray-700">This is a part of the WEB202 course.</p>
                </div>
            </div>
            <div class="px-6 pb-4 pt-4">
                <button class="rounded-md bg-blue-600 px-4  text-white">Learn more</button>
            </div>
        </div>
    );
};

export default Card;