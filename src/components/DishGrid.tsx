import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dish } from '@/data/dishes';
import { Utensils, Leaf, Beef, IceCream } from 'lucide-react';

interface DishGridProps {
  dishes: Dish[];
  title: string;
}

export const DishGrid = ({ dishes, title }: DishGridProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vegetarian':
        return <Leaf className="w-4 h-4" />;
      case 'non-vegetarian':
        return <Beef className="w-4 h-4" />;
      case 'dessert':
        return <IceCream className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vegetarian':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'non-vegetarian':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'dessert':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  if (dishes.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <Card key={dish.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
                }}
              />
              <div className="absolute top-3 right-3">
                <Badge className={getCategoryColor(dish.category)}>
                  <span className="flex items-center gap-1">
                    {getCategoryIcon(dish.category)}
                    {dish.category}
                  </span>
                </Badge>
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg">{dish.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{dish.description}</p>
              <p className="text-xs text-primary font-medium">{dish.region}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
