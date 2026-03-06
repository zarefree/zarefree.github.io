import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.BmLMQRXF.js";const g=JSON.parse('{"title":"NGINX 配置","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/nginx.md","filePath":"notes/deploy/nginx.md","lastUpdated":1772789933000}'),p={name:"deploy/nginx.md"};function h(t,s,e,k,r,E){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="nginx-配置" tabindex="-1">NGINX 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;NGINX 配置&quot;">​</a></h1><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user nginx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worker_processes auto</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worker_rlimit_nofile 65535</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid /var/run/nginx.pid</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error_log /var/log/nginx/error.log notice</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">events {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    multi_accept on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    worker_connections 1024</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include /etc/nginx/mime.types</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default_type application/octet-stream</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    log_format main </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;$status $body_bytes_sent &quot;$http_referer&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    access_log on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    access_log /var/log/nginx/access.log main</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # allow 127.0.0.1;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # deny all;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    charset utf-8</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sendfile on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tcp_nopush off</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tcp_nodelay on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server_tokens off</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    log_not_found off</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    keepalive_timeout 65</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    limit_req_log_level warn</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    limit_conn_zone $binary_remote_addr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">zone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=connection:256k</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    limit_req_zone $binary_remote_addr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">zone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=request:1m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=200r/s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    types_hash_max_size 2048</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    types_hash_bucket_size 64</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client_max_body_size 16M</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_session_timeout 1d;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_session_tickets off;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_dhparam /etc/nginx/dhparam.pem;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_stapling on;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ssl_stapling_verify on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resolver 1.1.1.1 1.0.0.1 8.8.8.8 8.8.4.4 208.67.222.222 208.67.220.220 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">valid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=60s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resolver_timeout 2s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_vary on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_static on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_comp_level 6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_buffers 16 8k</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_min_length 1024</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_http_version 1.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_proxied expired no-cache no-store private auth</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include /etc/nginx/conf.d/*.conf</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        listen 8080</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server_name localhost</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        limit_conn connection 500</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        limit_req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">zone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">burst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=100 nodelay</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            root /usr/share/nginx/html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            try_files $uri $uri/ /index.html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # index index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # location /ivd {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #     alias /usr/share/nginx/html/ivd;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #     try_files $uri $uri/ /ivd/index.html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        location /ivd-api {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            rewrite ^/ivd-api/(.*)$ /$1 break</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # valid_referers 127.0.0.1;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # if ($invalid_referer) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #     return 403;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header Content-Security-Policy </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-src &#39;self&#39; http: https: ws: wss: data: blob: &#39;unsafe-inline&#39;; frame-ancestors &#39;self&#39;;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header Permissions-Policy </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;interest-cohort=()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header Referrer-Policy </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no-referrer-when-downgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header Strict-Transport-Security </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max-age=31536000; includeSubDomains&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header X-XSS-Protection </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1; mode=block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            add_header X-Content-Type-Options </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nosniff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_pass http://172.19.0.201:9000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_http_version 1.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_cache_bypass $http_upgrade</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_ssl_server_name on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header Connection $http_connection</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header Forwarded </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;for=$remote_addr;proto=$scheme;by=$server_addr&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header Upgrade $http_upgrade</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header X-Real-IP $remote_addr</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header X-Forwarded-Host $host</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header X-Forwarded-Proto $scheme</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header X-Forwarded-Port $server_port</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_connect_timeout 60s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_send_timeout 60s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            proxy_read_timeout 60s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)]))}const y=i(p,[["render",h]]);export{g as __pageData,y as default};
