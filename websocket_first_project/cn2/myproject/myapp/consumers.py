


from channels.consumer import SyncConsumer,AsyncConsumer
from channels.exceptions import StopConsumer

from asgiref.sync import async_to_sync
class MySyncConsumer(SyncConsumer):
    def  websocket_connect(self,event):
        # print("opended!! > ",event)
        # print("layer>> ",self.channel_layer)
        # print("name>> ",self.channel_name)
        groupName = self.scope['url_route']['kwargs']['groupName']
       
        self.send(
            {
               "type":"websocket.accept"
            }
        )
        async_to_sync(self.channel_layer.group_add)(groupName,self.channel_name)
        
       
        
    def  websocket_receive(self,event):
        groupName = self.scope['url_route']['kwargs']['groupName']
        print(groupName)
        async_to_sync(self.channel_layer.group_send)(groupName,{ "type":"chat.message" ,'message':event['text']})
        
        
        
        
    def  websocket_disconnect(self,event):
        groupName = self.scope['url_route']['kwargs']['groupName']
        async_to_sync(self.channel_layer.group_discard)(groupName,self.channel_name)
        
        
    def chat_message(self,event):
        self.send(
            {
                'type':"websocket.send",
                'text':event['message']
            }
            
            
        )
        
        