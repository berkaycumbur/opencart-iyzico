function getApiValid(){var e,n,t;return event.preventDefault(),e=document.getElementById("api_channel").value,n=document.getElementById("api_key").value,t=document.getElementById("api_key").value,"live"==e?l(n,t):"sandbox"==e?s(n,t):(alert("Geçersiz istek."),!1)}function l(e,n){if("sandbox-"==e.substring(0,8)||"sandbox-"==n.substring(0,8))return alert("{{valid_live}}"),!1}
