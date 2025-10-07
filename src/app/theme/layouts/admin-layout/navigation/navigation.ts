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
  rolesPermitidos?: string[];  // <-- Nueva propiedad

}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      // {
      //   id: 'default',
      //   title: 'Default',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/dashboard/default',
      //   icon: 'dashboard',
      //   breadcrumbs: false,
      //   rolesPermitidos: ['Jefe Fundo'],
      // },
      {
        id: 'lecturashumedad',
        title: 'Lecturas de Humedad',
        type: 'item',
        classes: 'nav-item',
        url: '/lecturashumedad',
        icon: 'dashboard',
        breadcrumbs: false,
        rolesPermitidos: ['Jefe de Fundo', 'Super Usuario', 'Administrador', 'Supervisor'],
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
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'rango_guias',
        title: 'Rangos Guias',
        type: 'item',
        url: '/rango_guias',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'sedes',
        title: 'Sedes',
        type: 'item',
        url: '/sedes',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'fundos',
        title: 'Fundos',
        type: 'item',
        url: '/fundos',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'lotes',
        title: 'Lotes',
        type: 'item',
        url: '/lotes',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'sublotes',
        title: 'Sublotes',
        type: 'item',
        url: '/sublotes',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'cultivos',
        title: 'Cultivos',
        type: 'item',
        url: '/cultivos',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'variedades',
        title: 'Variedades',
        type: 'item',
        url: '/variedades',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'tipo-suelos',
        title: 'Tipos de suelos',
        type: 'item',
        url: '/tipos-suelos',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'fenologias',
        title: 'Fenologias',
        type: 'item',
        url: '/fenologias',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'variedad-raices',
        title: 'Variedades de raiz',
        type: 'item',
        url: '/variedad-raices',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador', 'Super Usuario'],
      },
      {
        id: 'detalle-raices',
        title: 'Detalle de raices',
        type: 'item',
        url: '/detalle-raices',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador',  'Super Usuario'],
      },
      {
        id: 'procesadores',
        title: 'Procesadores',
        type: 'item',
        url: '/procesadores',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador',  'Super Usuario'],
      },
      {
        id: 'configuracion_proces',
        title: 'Configurar procesador',
        type: 'item',
        url: '/configuracion_procesadores',
        classes: 'nav-item',
        icon: 'profile',
        rolesPermitidos: ['Administrador',  'Super Usuario'],
      },
    ]
  },
];
