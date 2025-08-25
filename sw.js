self.addEventListener("install", e => {
e.waitUntil(
caches.open("coachtrack-cache").then(cache => {
return cache.addAll([
"/",
"index.html",
"home.html",
"add-student.html",
"admin.html",
"attendance_report.html",
"attendance.html",
"fee.html",
"finance_report.html",
"menu.html",
"sms.html",
"view-students.html",
"style.css",
"manifest.json",
"icons/icon-192.png",
"icons/icon-512.png"
]);
})
);
});
self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(response => {
return response || fetch(e.request);
})
);
});