/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// See https://github.com/Microsoft/vscode/issues/30180
const WIN32_MAX_FILE_SIZE = 300 * 1024 * 1024; // 300 MB
const GENERAL_MAX_FILE_SIZE = 16 * 1024 * 1024 * 1024; // 16 GB

declare var MonacoSnapshotArch: string;
const arch: string = (typeof MonacoSnapshotArch !== 'undefined' ? MonacoSnapshotArch : process.arch);

export const MAX_FILE_SIZE = (arch === 'ia32' ? WIN32_MAX_FILE_SIZE : GENERAL_MAX_FILE_SIZE);
