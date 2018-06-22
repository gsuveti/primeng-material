import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tree-table-scrollable',
  templateUrl: './tree-table-scrollable.component.html',
  styleUrls: ['./tree-table-scrollable.component.scss']
})
export class TreeTableScrollableComponent implements OnInit {
  lazyFiles: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService
      .getLazyFilesystem()
      .then(files => (this.lazyFiles = files));
  }

  nodeExpand(event) {
    if (event.node) {
      // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.nodeService
        .getLazyFilesystem()
        .then(nodes => (event.node.children = nodes));
    }
  }
}
