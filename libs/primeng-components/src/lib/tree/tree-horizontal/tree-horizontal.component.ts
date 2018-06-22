import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-horizontal',
  templateUrl: './tree-horizontal.component.html',
  styleUrls: ['./tree-horizontal.component.scss']
})
export class TreeHorizontalComponent implements OnInit {
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }
}
