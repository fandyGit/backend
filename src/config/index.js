import Vue from 'vue';
import {
  Pagination,
  Dialog,
  MenuItem,
  MenuItemGroup,
  Input,
  Menu,
  Submenu,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Loading,
  MessageBox,
  Form,
  FormItem,
  InputNumber,
  Icon,
  Row,
  Col,
  Upload,

  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,




  // Switch,
  //
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,

  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  Alert,
  // Slider,

  // Progress,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,

  // Message,
  // Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Alert);
Vue.use(Row);
Vue.use(Col);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Upload);

// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Switch);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Slider);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
