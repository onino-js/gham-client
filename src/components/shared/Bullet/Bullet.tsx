import * as React from "react";
import "./Bullet.css";

interface Props {
  status: 'done' | 'pending' | 'todo';
  index?: number;
}

export class Bullet extends React.Component<Props> {
  render() {
    const { index = 1, status } = this.props;
    switch (status) {
      case ('pending'): {
        return <svg className="bullet-point pending" viewBox="0 0 50 50">
          {index > 0 && <line x1="25" x2="25" y1="-50" y2="25" />}
          <line x1="25" x2="25" y1="25" y2="100" />
          <circle className="back" r="12" cx="25" cy="25" />
          <circle className="center" r="6" cx="25" cy="25" />
        </svg>
      }
      case ('todo'): {
        return <svg className="bullet-point todo" viewBox="0 0 50 50">
          {index > 0 && <line x1="25" x2="25" y1="-50" y2="25" />}
          <line x1="25" x2="25" y1="25" y2="100" />
          <circle className="back" r="12" cx="25" cy="25" />
        </svg>
      }
      case ('done'): {
        return <svg className="bullet-point done" viewBox="0 0 50 50">
          {index > 0 && <line x1="25" x2="25" y1="-50" y2="25" />}
          <line x1="25" x2="25" y1="25" y2="100" />

          <circle className="back" r="12" cx="25" cy="25" />
          <path className="check"
            d="M18 25 L23 30 L32 21" />
        </svg>
      }
    }
  }
}
