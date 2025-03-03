export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'lecturashumedad',
        title: 'Lecturas de Humedad',
        type: 'item',
        classes: 'nav-item',
        url: '/lecturashumedad',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  //Esto es para que todos los cruds aparescan en el navbar
  {
    id: 'Crud',
    title: 'Crud',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'roles',
        title: 'Roles',
        type: 'item',
        url: '/roles',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'sedes',
        title: 'Sedes',
        type: 'item',
        url: '/sedes',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'fundos',
        title: 'Fundos',
        type: 'item',
        url: '/fundos',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'lotes',
        title: 'Lotes',
        type: 'item',
        url: '/lotes',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'sublotes',
        title: 'Sublotes',
        type: 'item',
        url: '/sublotes',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'cultivos',
        title: 'Cultivos',
        type: 'item',
        url: '/cultivos',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'variedades',
        title: 'Variedades',
        type: 'item',
        url: '/variedades',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'tipo-suelos',
        title: 'Tipos de suelos',
        type: 'item',
        url: '/tipos-suelos',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'fenologias',
        title: 'Fenologias',
        type: 'item',
        url: '/fenologias',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'variedad-raices',
        title: 'Variedades de raiz',
        type: 'item',
        url: '/variedad-raices',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'detalle-raices',
        title: 'Detalle de raices',
        type: 'item',
        url: '/detalle-raices',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'procesadores',
        title: 'Procesadores',
        type: 'item',
        url: '/procesadores',
        classes: 'nav-item',
        icon: 'profile'
      },
      {
        id: 'configuracion_proces',
        title: 'Configurar procesador',
        type: 'item',
        url: '/configuracion_procesadores',
        classes: 'nav-item',
        icon: 'profile'
      },
    ]
  },

  // {
  //   id: 'utilities',
  //   title: 'UI Components',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'font-size'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'bg-colors'
  //     },
  //     {
  //       id: 'tabler',
  //       title: 'Tabler',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://ant.design/components/icon',
  //       icon: 'ant-design',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'question',
        target: true,
        external: true
      }
    ]
  }
];
