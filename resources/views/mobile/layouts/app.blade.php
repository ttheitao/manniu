<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'manniu')</title>
    <!-- 样式 -->
    <link href="{{ mix('mobile/css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <div class="container">
        @yield('content')
        <public-nav></public-nav>
    </div>
</div>
<!-- JS 脚本 -->
<script src="{{ mix('mobile/js/app.js') }}"></script>
</body>
</html>