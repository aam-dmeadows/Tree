import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export class TreeNode {

  private _element: Element;

  private _parent: TreeNode;

  private _children: TreeNode[];

  private _expanded: boolean;

  constructor(element?: Element) {
    this._element = element;
  }

  add(node: TreeNode): void {
    if (!this._children.includes(node)) {
      this._children.push(node);
      node._parent = this;
    }
  }

  remove(node: TreeNode): void {
    if (this._children.includes(node)) {
      const index: number = this._children.indexOf(node);
      this._children.splice(index, 1);
      node._parent = null;
    }
  }

  get element(): Element {
    return this._element;
  }

  get parent(): TreeNode {
    return this._parent;
  }

  get children(): TreeNode[] {
    return this._children;
  }

  get expanded(): boolean {
    return this._expanded;
  }
}
