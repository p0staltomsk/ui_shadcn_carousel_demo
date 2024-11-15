import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { items, logoItems } from './mocks/mocks'
import { Item } from './types/types'

export default function EnhancedTwoRowGridCarousel() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden">
      <div className="flex flex-col min-h-screen px-2 sm:px-4 py-6 sm:py-8 md:py-12">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Двухрядная Карусель с Grid-раскладкой</h1>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Демонстрация карусели с изображениями и векторной графикой, адаптированной к светлой и тёмной теме
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center mb-6 sm:mb-8 md:mb-12">
          <div className="w-full max-w-[90rem]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {items.map((item: Item, index: number) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="grid grid-rows-2 gap-4 h-full">
                      <motion.div
                        className="h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="overflow-hidden h-full bg-card">
                          <CardContent className="p-0 h-full">
                            <div className="relative h-full flex flex-col">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white select-none">
                                <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 leading-tight">{item.title}</h3>
                                <div className="flex items-center justify-between">
                                  <Badge variant="secondary" className="text-xs sm:text-sm">{item.category}</Badge>
                                  <div className="flex items-center">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-xs sm:text-sm font-semibold">{item.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                      <motion.div
                        className="h-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="overflow-hidden h-24 w-24 bg-card flex items-center justify-center">
                          <CardContent className="p-2">
                            <img
                              src={logoItems[index].logoUrl}
                              alt={logoItems[index].name}
                              width={80}
                              height={80}
                              className="object-contain w-full h-full filter grayscale dark:invert"
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="-left-2 sm:-left-4 md:-left-6 bg-background/80 backdrop-blur-sm hover:bg-accent" />
                <CarouselNext className="-right-2 sm:-right-4 md:-right-6 bg-background/80 backdrop-blur-sm hover:bg-accent" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full px-2">
          <div className="prose dark:prose-invert">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Использованные технологии:</h2>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              <li>React + TypeScript</li>
              <li>Vite для сборки проекта</li>
              <li>Tailwind CSS для стилизации</li>
              <li>shadcn/ui компоненты</li>
              <li>CSS Grid для двухрядной раскладки</li>
              <li>SVG иконки с поддержкой тем</li>
              <li>Framer Motion для анимаций</li>
              <li>Embla Carousel для функционала карусели</li>
              <li>next-themes для управления темной/светлой темой</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Карусель демонстрирует адаптивный дизайн с двухрядной grid-раскладкой, где верхний ряд содержит фотографии,
            а нижний - векторные иконки с автоматической адаптацией к текущей теме оформления.
            Поддерживаются свайпы на мобильных устройствах и навигация с помощью кнопок и клавиатуры.
          </p>
        </div>
      </div>
    </div>
  )
}
