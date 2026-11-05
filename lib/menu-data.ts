export type MenuCategory = 'Starters' | 'Main Course' | 'Pizza' | 'Desserts' | 'Beverages'
export type MenuItem = { name: string; description: string; price: number; category: MenuCategory; image: string }
export const menuItems: MenuItem[] = [
 { name:'Burrata & Heirloom Tomato', description:'Creamy burrata, basil oil, aged balsamic', price:495, category:'Starters', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80' },
 { name:'Roasted Mushroom Crostini', description:'Wild mushrooms, sourdough, truffle butter', price:375, category:'Starters', image:'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=800&q=80' },
 { name:'Mediterranean Salad', description:'Greens, olives, feta, cucumber, lemon', price:420, category:'Starters', image:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80' },
 { name:'Truffle Cream Pasta', description:'Hand-rolled pasta, parmesan, black truffle', price:695, category:'Main Course', image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80' },
 { name:'Grilled Paneer Steak', description:'Smoked paneer, seasonal vegetables, jus', price:625, category:'Main Course', image:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
 { name:'Herb Crusted Sea Bass', description:'Coastal herbs, saffron beurre blanc', price:895, category:'Main Course', image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },
 { name:'Classic Margherita Pizza', description:'San Marzano tomato, fior di latte, basil', price:545, category:'Pizza', image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' },
 { name:'Spiced Mushroom Pizza', description:'Roasted mushrooms, chilli, smoked mozzarella', price:595, category:'Pizza', image:'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80' },
 { name:'Chocolate Lava Cake', description:'Warm dark chocolate, vanilla bean ice cream', price:395, category:'Desserts', image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80' },
 { name:'Rose & Pistachio Panna Cotta', description:'Silky cream, rose syrup, toasted pistachio', price:365, category:'Desserts', image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80' },
 { name:'Signature Mocktail', description:'Passionfruit, basil, citrus, sparkling water', price:295, category:'Beverages', image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80' },
 { name:'Cold Brew Tonic', description:'Slow-steeped coffee, tonic, orange peel', price:275, category:'Beverages', image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80' },
]
