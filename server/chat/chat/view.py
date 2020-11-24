from django.http import HttpResponse


def home(request):
    html = '''
    <html>
    <head>
    <title>在线聊天</title></head>
    
    <body>
    hello
    <input type="text"/>   
    <input type="submit"/>   
    </body>
    </html>
    '''
    return HttpResponse(html)
