import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For React 16
configure({ adapter: new Adapter() });

// For React 17 or 18, use the corresponding adapter like this:
// import Adapter from 'enzyme-adapter-react-17';
// configure({ adapter: new Adapter() });

// For React 18, use:
// import Adapter from '@wojtekmaj/enzyme-adapter-react-18';
// configure({ adapter: new Adapter() });
