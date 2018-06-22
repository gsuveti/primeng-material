import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tree-multiple-selection-checkbox',
  templateUrl: './tree-multiple-selection-checkbox.component.html',
  styleUrls: ['./tree-multiple-selection-checkbox.component.scss']
})
export class TreeMultipleSelectionCheckboxComponent implements OnInit {
  selectedFiles: TreeNode[];

  filesTree: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }
}
