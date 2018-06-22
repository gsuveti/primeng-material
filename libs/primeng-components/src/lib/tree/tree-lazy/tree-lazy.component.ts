import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tree-lazy',
  templateUrl: './tree-lazy.component.html',
  styleUrls: ['./tree-lazy.component.scss']
})
export class TreeLazyComponent implements OnInit {
  lazyFiles: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getLazyFiles().then(files => (this.lazyFiles = files));
  }

  nodeExpand(event) {
    if (event.node) {
      // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.nodeService
        .getLazyFiles()
        .then(nodes => (event.node.children = nodes));
    }
  }
}
