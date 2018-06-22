import { Component, OnInit, ViewChild } from '@angular/core';
import { Tree, TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-programatic-expansion',
  templateUrl: './tree-programatic-expansion.component.html',
  styleUrls: ['./tree-programatic-expansion.component.scss']
})
export class TreeProgramaticExpansionComponent implements OnInit {
  @ViewChild('expandingTree') expandingTree: Tree;

  filesTree: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }

  expandAll() {
    this.filesTree.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.filesTree.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
