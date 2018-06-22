import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-loading',
  templateUrl: './tree-loading.component.html',
  styleUrls: ['./tree-loading.component.scss']
})
export class TreeLoadingComponent implements OnInit {
  loading: boolean;
  filesTree: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.nodeService.getFiles().then(files => (this.filesTree = files));
      this.loading = false;
    }, 3000);
  }
}
