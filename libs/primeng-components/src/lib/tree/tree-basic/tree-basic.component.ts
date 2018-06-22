import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: ['./tree-basic.component.scss']
})
export class TreeBasicComponent implements OnInit {
  filesTree: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }
}
