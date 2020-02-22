class BinaryTreeNode {
				constructor(value){
					this.root = null;
					this.value = value;
					this.left = null;
					this.right = null;
				}

				init(nodeParent){

					this.root = nodeParent;
					this.value = value;
					this.left = null;
					this.right = null;
				}


				insert(value,global){
					const newNode = new BinaryTreeNode(value);
					//if(this.root === null) this.root = newNode;
					//else 
					this.insertNode(global,newNode);
				}
				insertNode(node,newNode){
					if(newNode.value < node.value){
						if(node.left === null) {newNode.root=node;node.left = newNode;}
						else this.insertNode(node.left, newNode);
					} else if(newNode.value === node.value){
						node.value = newNode.value;
					} else {
						if(node.right === null) {newNode.root=node;node.right = newNode;}
						else this.insertNode(node.right, newNode);
					}
				}
				showBinaryTree(){
					if (!this.root) {
				  		return 'Tree is empty'
					}
					else {
						if(this.left)
				  			{
				  			//	document.getElementById("inOrder").textContent+=" "+this.value;
				  				this.left.showBinaryTree();
				  				
				  			}
				  		if(this.right)
				  		{
 			
				  			this.right.showBinaryTree();
				  			//document.getElementById("inOrder").textContent+=" "+this.value;
				  		}
				  			
					}	
				}
			}
				var maple = new BinaryTreeNode(Math.floor(Math.random() * 10));
				maple.root=maple;
				var level = Math.floor(Math.random() * 20)+1;
				var value = 0;
				for(var i = 0 ; i < level; i++){
					value = Math.floor(Math.random() * 10);
					maple.insert(value,maple);
				}
				console.log(maple);
				maple.showBinaryTree();
