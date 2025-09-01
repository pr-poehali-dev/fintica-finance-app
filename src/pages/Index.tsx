import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('Основной счет');

  // Mock data
  const balance = 125400;
  const monthlyIncome = 85000;
  const monthlyExpenses = 52000;
  const savings = 230000;
  const investments = 180000;

  const recentTransactions = [
    { id: 1, type: 'income', amount: 15000, category: 'Зарплата', date: '2025-02-28', description: 'Зарплата за февраль' },
    { id: 2, type: 'expense', amount: -3500, category: 'Продукты', date: '2025-02-27', description: 'Покупки в Ашане' },
    { id: 3, type: 'expense', amount: -12000, category: 'Транспорт', date: '2025-02-26', description: 'Заправка автомобиля' },
    { id: 4, type: 'income', amount: 8500, category: 'Фриланс', date: '2025-02-25', description: 'Проект веб-дизайна' },
  ];

  const savingsAccounts = [
    { name: 'Отпуск', amount: 85000, goal: 150000 },
    { name: 'Новый автомобиль', amount: 120000, goal: 300000 },
    { name: 'Резервный фонд', amount: 25000, goal: 100000 },
  ];

  const investmentPortfolio = [
    { name: 'Акции Сбера', amount: 65000, change: '+5.2%' },
    { name: 'ETF MOEX', amount: 75000, change: '+2.8%' },
    { name: 'Облигации ОФЗ', amount: 40000, change: '+1.1%' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const MenuContent = () => (
    <div className="space-y-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="transactions">Операции</TabsTrigger>
          <TabsTrigger value="savings">Накопления</TabsTrigger>
          <TabsTrigger value="investments">Инвестиции</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4">
            <Card className="bg-slate-800 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-200">Общий баланс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
                <p className="text-slate-300 text-sm mt-1">+{formatCurrency(monthlyIncome - monthlyExpenses)} в этом месяце</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" className="h-4 w-4 text-emerald-600" />
                    <CardTitle className="text-sm">Доходы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-emerald-600">{formatCurrency(monthlyIncome)}</p>
                  <p className="text-xs text-slate-500">за февраль</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingDown" className="h-4 w-4 text-red-600" />
                    <CardTitle className="text-sm">Расходы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-red-600">{formatCurrency(monthlyExpenses)}</p>
                  <p className="text-xs text-slate-500">за февраль</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="PiggyBank" className="h-4 w-4 text-blue-600" />
                    <CardTitle className="text-sm">Накопления</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">{formatCurrency(savings)}</p>
                  <p className="text-xs text-slate-500">3 счета</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="LineChart" className="h-4 w-4 text-slate-600" />
                    <CardTitle className="text-sm">Инвестиции</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">{formatCurrency(investments)}</p>
                  <p className="text-xs text-emerald-600">+3.2% за месяц</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <div className="flex space-x-2 mb-4">
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
              <Icon name="Plus" className="h-4 w-4 mr-2" />
              Доход
            </Button>
            <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
              <Icon name="Minus" className="h-4 w-4 mr-2" />
              Расход
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <Card key={transaction.id} className="hover-scale">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant={transaction.type === 'income' ? 'default' : 'secondary'}>
                          {transaction.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{transaction.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.description}</p>
                    </div>
                    <p className={`font-semibold ${transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <Button className="w-full mb-4">
            <Icon name="Plus" className="h-4 w-4 mr-2" />
            Создать счет накоплений
          </Button>
          
          <div className="space-y-4">
            {savingsAccounts.map((account, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{account.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{formatCurrency(account.amount)}</span>
                      <span className="text-muted-foreground">{formatCurrency(account.goal)}</span>
                    </div>
                    <Progress value={(account.amount / account.goal) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {Math.round((account.amount / account.goal) * 100)}% от цели
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1 border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                      <Icon name="Plus" className="h-3 w-3 mr-1" />
                      Пополнить
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50">
                      <Icon name="Minus" className="h-3 w-3 mr-1" />
                      Снять
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="investments" className="space-y-4">
          <Button className="w-full mb-4">
            <Icon name="Plus" className="h-4 w-4 mr-2" />
            Добавить инвестицию
          </Button>
          
          <div className="space-y-3">
            {investmentPortfolio.map((investment, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{investment.name}</h4>
                      <p className="text-sm text-muted-foreground">{formatCurrency(investment.amount)}</p>
                    </div>
                    <Badge variant={investment.change.startsWith('+') ? 'default' : 'destructive'}>
                      {investment.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 business-shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-800">Fintica</h1>
            <Badge variant="outline" className="text-xs font-medium bg-slate-100 text-slate-600 border-slate-300">
              Professional
            </Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Icon name="Menu" className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
                <SheetHeader className="mb-4">
                  <SheetTitle>Финансовая панель</SheetTitle>
                </SheetHeader>
                <MenuContent />
              </SheetContent>
            </Sheet>
            
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-slate-600 text-white font-medium">ЮР</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Финансовая панель управления</h2>
          <p className="text-slate-600">Профессиональные инструменты для управления капиталом</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 text-white hover-scale business-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-300">Общий баланс</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
              <p className="text-slate-300 text-xs">
                <Icon name="TrendingUp" className="h-3 w-3 inline mr-1" />
                +{formatCurrency(monthlyIncome - monthlyExpenses)} за месяц
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale business-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Доходы</CardTitle>
                <Icon name="ArrowUpRight" className="h-4 w-4 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(monthlyIncome)}</p>
              <p className="text-slate-500 text-xs">За февраль 2025</p>
            </CardContent>
          </Card>

          <Card className="hover-scale business-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Расходы</CardTitle>
                <Icon name="ArrowDownRight" className="h-4 w-4 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600">{formatCurrency(monthlyExpenses)}</p>
              <p className="text-slate-500 text-xs">За февраль 2025</p>
            </CardContent>
          </Card>

          <Card className="hover-scale business-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Инвестиции</CardTitle>
                <Icon name="TrendingUp" className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(investments)}</p>
              <p className="text-emerald-600 text-xs font-medium">+3.2% доходность</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Последние операции</CardTitle>
                <Button variant="outline" size="sm">
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Добавить
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.slice(0, 4).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover-scale">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-secondary/10' : 'bg-destructive/10'}`}>
                        <Icon 
                          name={transaction.type === 'income' ? 'ArrowUpRight' : 'ArrowDownRight'} 
                          className={`h-4 w-4 ${transaction.type === 'income' ? 'text-secondary' : 'text-destructive'}`} 
                        />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <p className={`font-semibold ${transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Savings Progress */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Прогресс накоплений</CardTitle>
                <Button variant="outline" size="sm">
                  <Icon name="Target" className="h-4 w-4 mr-2" />
                  Цели
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {savingsAccounts.slice(0, 3).map((account, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{account.name}</h4>
                      <span className="text-sm font-semibold">{Math.round((account.amount / account.goal) * 100)}%</span>
                    </div>
                    <Progress value={(account.amount / account.goal) * 100} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{formatCurrency(account.amount)}</span>
                      <span>{formatCurrency(account.goal)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Overview Chart */}
        <Card className="mt-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Финансовая аналитика</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 space-y-4">
              <img 
                src="/img/8166b220-c98f-41c1-a17b-3b2b323bec61.jpg" 
                alt="Финансовая панель" 
                className="mx-auto w-full max-w-md rounded-lg shadow-lg"
              />
              <p className="text-muted-foreground">
                Интерактивные графики доходов и расходов
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Доходы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span>Расходы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Накопления</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;