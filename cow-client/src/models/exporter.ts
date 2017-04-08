export class Exporter {
    constructor(
        public region: string,
        public name: string,
        public benchmarks: Array<Object>,
        public id?: number,) { }
}