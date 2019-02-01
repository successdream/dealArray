 //根据id， 找寻某个具有此id的数据
 mapDataForIdForDelete(data:any,dragId:number){
  dragId = dragId -0;
  if( this.dragId === -1 || this.dropTargetIds === -1) return;
  for(var i =0;i<data.length;i++){
     const item = data[i];
     console.log(item.Id, dragId)
     if(item.Id === dragId){
       if( item.children ) {
         delete item.children;
         data.splice(i,1);
         return item;
        }else{
          data.splice(i,1);
          return item;
        }
     }else{
       if( item.children ){
         let returnVal:any = this.mapDataForIdForDelete(item.children,dragId);
         //递归函数外层的return慎用
         if( returnVal!==undefined ) {
           return returnVal
         }
       }
     }
  }
}
 //根据id添加数据
mapDataForIdForAdd(data:any,dropTargetIds:number){
  dropTargetIds = dropTargetIds -0;
  if( this.dragId === -1 || this.dropTargetIds === -1) return;
  for(var i =0;i<data.length;i++){
     const item = data[i];
     if(item.Id === dropTargetIds){
       if(item.children){
         item.children.push(this.dragData)
         this.renderData.splice(1,0)
         
       }else{
         item.children = [];
         item.children.push(this.dragData)
         this.renderData.splice(1,0)

       }
     }else{
       if( item.children ){
         let returnVal:any = this.mapDataForIdForAdd(item.children,dropTargetIds);
       }
     }
  }
}